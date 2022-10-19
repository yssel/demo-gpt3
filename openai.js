const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const queryGPT3 = async (query, headers) => {
  const headerStr = `\n| ${headers.join(' | ')} |\n`;

  const response = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: `${query}\n\n${headerStr}`,
    temperature: 0,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  const strResult = response.data.choices[0].text;
  const rowSplit = strResult.split('\n\n');
  const firstRow = rowSplit.find(row => row.trim() !== '' && row.trim().slice(0,2) !== '|-');
  const firstRowSplit = firstRow.split('|').filter(data => data.trim() != '').map(data => data.trim());

  const result = headers.reduce((acc, curr, index) => ({ ...acc, [curr]: firstRowSplit[index] }), {});

  return result;
}

module.exports = {
  queryGPT3
};