/**
 * A weak map to track the number of API calls made to each endpoint.
 * @type {WeakMap<Object, number>}
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of allowed calls to an endpoint.
 * @type {number}
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API endpoint.
 * Throws an error if the maximum number of calls is exceeded.
 * 
 * @param {Object} endpoint - The endpoint to make a request to.
 * @param {string} endpoint.protocol - The protocol of the endpoint.
 * @param {string} endpoint.name - The name of the endpoint.
 * 
 * @throws {Error} If the number of calls exceeds the maximum allowed.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const currentCalls = weakMap.get(endpoint);
  weakMap.set(endpoint, currentCalls + 1);

  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
