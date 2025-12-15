/**
 * LeetCode #121: Best Time to Buy and Sell Stock
 * * PROBLEM:
 * You have an array of prices where prices[i] is the price of a stock on day i.
 * You want to maximize your profit by choosing a single day to buy one stock 
 * and choosing a different day in the future to sell that stock.
 * * STRATEGY: "One Pass" (Greedy Approach)
 * Instead of checking every pair (Brute Force), we maintain two variables:
 * 1. minPrice: The lowest price seen SO FAR.
 * 2. maxProfit: The best profit we could have made SO FAR.
 * * COMPLEXITY:
 * Time: O(n) - We only loop through the array once.
 * Space: O(1) - We only use two variables, regardless of array size.
 */

export function maxProfit(prices: number[]): number {
    // Initialize minPrice to Infinity so the first real price always overwrites it.
    let minPrice = Infinity; 
    let maxProfit = 0; 

    for(let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // We found a new lowest price to buy!
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            // If we sell today, is it better than our previous best record?
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};
