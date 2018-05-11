echo "Pulling repo..."
git pull

echo "Building docs..."
yarn run lib:build

echo "Pushing to dev server..."
sudo scp -i ~/.ssh/google_compute_engine -r ./docs/build/* ${USER}@104.155.184.149:/var/www/html/docs/

echo "Notifying Microsoft Teams devops channel..."
COMMIT=$(git rev-parse --short HEAD)
BRANCH=$(git rev-parse --abbrev-ref HEAD)
curl -H "Content-Type: application/json" -d "{\"@type\": \"Text\",\"summary\": \"Fractal Docs: deployed ${BRANCH} branch at commit ${COMMIT} to http://104.155.184.149/docs/\",\"text\": \"Fractal Docs: deployed ${BRANCH} branch at commit ${COMMIT} to http://104.155.184.149/docs/\"}" https://outlook.office.com/webhook/c5d55d42-eb3c-4ae2-a1fd-d6f047da7e34@414efc33-68fe-4520-802f-aea4401192d0/IncomingWebhook/fa72632d6ebc4283879fcf995637db0f/fe990827-22bc-4d48-b467-ef05a7e21dc3
