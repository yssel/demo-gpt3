## GPT-3 Parse Unstructured Data Demo

This is simply a demo of how OpenAI's GPT-3 can be used to parse words given a string input

Given this input:

Query:
> I'd like to sell a domain named Escrow.com for $1000,000,000 leased monthly up to 1 year

Keywords (that you'd like to extract):
> Action, Domain Name, Price, Frequency, Duration

You will receive an object:

```
{
  Action: 'Sell',
  'Domain Name': 'Escrow.com',
  Price: '$1,000,000,000',
  Frequency: 'Monthly',
  Duration: '1 Year'
}
```

🤯

-----------------------------------------------------------------------

### Get Started
1. Create a `.env` file with the following inside
```
OPENAI_API_KEY = <your secret key from your account in Open AI>
```

2. Run `npm install`

3. Run `npm start`

4. Follow the prompt (or just keep hitting enter to use default values);

5. Enjoy the result! 🥳