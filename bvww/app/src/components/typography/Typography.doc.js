import React from 'react';
import {
  Page,
  HtmlSpecimen,
} from 'catalog';


export default () => {
  return (
    <Page>
      <h2>Typeface</h2>
      <p>The <a href="https://fonts.google.com/specimen/Roboto" target="_blank" rel="noopener noreferrer">Roboto font family</a> is used throughout the designs for everything: titles, headlines, subtitles, and all other text.</p>
      <HtmlSpecimen
        span={6}
      >
        {
          /* eslint-disable no-useless-escape */
          `
          <p>ABCĆČDĐEFGHIJKLMNOPQRSäTUVWXYZéabcčćdđefghijklmnopqrsötuvwxyzû<br />
          АБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯ<br />
          абвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюя<br />
          ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫΏĂ‘ƠƯă‚ÍÙơư<br />
          1234567890ë?'"!"(%)[#]{@}/&\<-+˜◊=>Æ©$Ä£•¢:;,.*</p>
          `
          /* eslint-enable no-useless-escape */
        }
      </HtmlSpecimen>

      <h2>Font Sizes and Colors</h2>
      <h3>Headings</h3>
      <HtmlSpecimen
        span={6}
      >
        {
          `
          <h1 class="title">Title - Regular - 20px - color #222129</h1>
          <h2 class="subtitle">Subtitle - Regular - 16px - color #7C7C89</h2>
          <h3 class="subsubtitle">Subsubtitle - Regular - 14px - color #7C7C89</h3>
          `
        }
      </HtmlSpecimen>
      <HtmlSpecimen
        span={6}
      >
        {
          `
          <div class="navigation-title">Navigation-Title - Regular - 14px - color #565963</div>
          `
        }
      </HtmlSpecimen>
      <HtmlSpecimen
        span={6}
      >
        {
          `
          <div class="widget-title">Widget-Title - Light - 16px - color #3A3C44</div>
          `
        }
      </HtmlSpecimen>

      <HtmlSpecimen
        span={6}
      >
        {
          `
          <div class="meta">Meta information - Regular - 12px - color #3a3c44</h3>
          `
        }
      </HtmlSpecimen>

      <h3>Body Text</h3>
      <HtmlSpecimen
        span={6}
      >
        {
          `
          <p>Base font - Regular - 14px - color #3a3c44</p>
          <p>Holder corporation Fitch interest. Funds lucrative municipal risk rise hedge fund interest industry return government treasury municipal bonds rates. Treasury index Fitch rise gains established municipal bonds retirement. Credit substantially comodity rollover index funds. Rates NASDAQ capital potential expenses bull called interest rate receive volatile Fitch. Potential maturities capitalization gains 401k dividends.</p>
          <p>Management return substantially junk bonds. Market municipal market index bear district. Risk gains capital NYSE money. Index funds taxpayer government. Rates market exposure government. Yield municipal corporate quarterly risk expenses.</p>
          <p>Funds money capitalization. Economy capital government mutual funds gains.</p>
          `
        }
      </HtmlSpecimen>

      <HtmlSpecimen
        span={6}
      >
        {
          `
          <p class="meta">Meta information (multiline) - Regular - 12px - color #3a3c44</p>
          <p class="meta">Management return substantially junk bonds. Market municipal market index bear district. Risk gains capital NYSE money. Index funds taxpayer government. Rates market exposure government. Yield municipal corporate quarterly risk expenses.</p>
          `
        }
      </HtmlSpecimen>

      <HtmlSpecimen
        span={6}
      >
        {
          `
          <p><a href="#"">Link</a></p>
           `
        }
      </HtmlSpecimen>
    </Page>
  );
};
