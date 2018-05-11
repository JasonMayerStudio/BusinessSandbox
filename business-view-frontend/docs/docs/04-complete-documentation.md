<link rel="stylesheet" type="text/css" href="/css/print.css">

{{#allDocs}}
<div style="display: flex; flex-direction: row; margin-top: 50px; justify-content: space-between; align-items: center; border-bottom: 1px solid #ccc; padding-bottom: 0.4rem;">
    <h1>{{this.title}}</h1>
    <p style="font: normal 0.75rem/1.66667 'Open Sans', Helvetica, Arial, sans-serif; letter-spacing: 0.075em; text-transform: uppercase; display: inline-block; border-radius: 2rem; padding: 0.125rem 0.75rem; color: white; white-space: nowrap; background-color: {{this.status.color}}; color: #fff;">{{this.status.label}}</p>
</div>
{{/allDocs}}