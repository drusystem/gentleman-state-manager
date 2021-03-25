/**
 * @desc checks if the condition is met and returns its value
 * @param condition - the condition to check
 * @param errorMessage - the error message to be shown if the condition is not met
 * @return any
 */
export function checkIfConditionMet(condition, errorMessage) {
    const conditionMet = condition();
    if (!conditionMet.met) {
        console.error(errorMessage);
        throw Error(errorMessage);
    }
    return conditionMet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25hbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2VudGxlbWFuLXN0YXRlLW1hbmFnZXItbGliLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2Z1bmN0aW9uYWxpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7R0FLRztBQUVILE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxTQUEwQixFQUFFLFlBQW9CO0lBQ2xGLE1BQU0sWUFBWSxHQUFHLFNBQVMsRUFBRSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO1FBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsTUFBTSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDM0I7SUFDRCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25kaXRpb259IGZyb20gJy4uL21vZGVscy91dGlscyc7XG5cbi8qKlxuICogQGRlc2MgY2hlY2tzIGlmIHRoZSBjb25kaXRpb24gaXMgbWV0IGFuZCByZXR1cm5zIGl0cyB2YWx1ZVxuICogQHBhcmFtIGNvbmRpdGlvbiAtIHRoZSBjb25kaXRpb24gdG8gY2hlY2tcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2UgLSB0aGUgZXJyb3IgbWVzc2FnZSB0byBiZSBzaG93biBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXRcbiAqIEByZXR1cm4gYW55XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSWZDb25kaXRpb25NZXQoY29uZGl0aW9uOiAoKSA9PiBDb25kaXRpb24sIGVycm9yTWVzc2FnZTogc3RyaW5nKTogYW55IHtcbiAgY29uc3QgY29uZGl0aW9uTWV0ID0gY29uZGl0aW9uKCk7XG4gIGlmICghY29uZGl0aW9uTWV0Lm1ldCkge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlKTtcbiAgICB0aHJvdyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG4gIHJldHVybiBjb25kaXRpb25NZXQ7XG59XG4iXX0=