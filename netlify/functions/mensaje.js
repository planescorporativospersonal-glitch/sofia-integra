exports.handler = async function(event) {
  const body = JSON.parse(event.body);
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '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',
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: body.messages
    })
  });
  const data = await response.json();
  return {
    statusCode: 200,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };
};
