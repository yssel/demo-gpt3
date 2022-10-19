require('dotenv').config();
const { queryGPT3 } = require('./openai');
const prompt = require('prompt');


const schema = {
  properties: {
    query: {
      message: 'GPT-3 Input:',
      default: "I'd like to sell a domain named Escrow.com for $1000,000,000 leased monthly up to 1 year",
    },
    keywords: {
      message: 'Keywords, separated by comma (ex: \'Action, Domain Name, Price, Frequency, Duration\')',
      default: 'Action, Domain Name, Price, Frequency, Duration',
    }
  }
};

prompt.start();
prompt.get(schema, async function (err, result) {
  if (err) {
    console.log(err);
    return 1;
  }
  const gptQuery = result.query;
  const gptKeywords = result.keywords.split(',').map(key => key.trim());

  console.log('========= GPT-3 Query =========')
  console.log('Command-line input received:');
  console.log('  Input: ' + gptQuery);
  console.log('  Keywords: ' + gptKeywords);

  console.log('\n\n');

  const response = await queryGPT3(gptQuery, gptKeywords);
  console.log('========= GPT-3 RESULTS =========')
  console.log(response);
});