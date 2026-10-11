async function calculateScore() {

    const response = await fetch("data/market_rule.json");

    const marketScore = await response.json();

    return marketScore.policy
        + marketScore.capital
        + marketScore.valuation
        + marketScore.emotion
        + marketScore.risk;
}