import { Pipe, PipeTransform } from "@angular/core";

// By using this interface we can pass the args to the pipe whichever we want instead of the same order for example we can only pass the suffix without the limit.

interface TruncateOptions {
  limit?: number;
  suffix? : string;
}

@Pipe({
  name:'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, options: TruncateOptions = {}): string {
    if(!value) return '';

    const limit = options.limit ?? 15;     // default limit
    const suffix = options.suffix ?? '...'; // default suffix
    return value.length > limit ? value.slice(0, limit) + suffix : value;
  }


  /**
 * -------------------------------
 *  TRUNCATE PIPE — DOCUMENTATION
 * -------------------------------
 *
 * PURPOSE:
 * This pipe shortens long text. Instead of using positional
 * arguments like `truncate:15:'...'`, we pass a single `options`
 * object. This makes the pipe more readable, flexible, and allows
 * skipping arguments.
 *
 * WHY USE AN OPTIONS OBJECT?
 * - Angular pipe params are positional.
 * - We cannot skip arguments (example: truncate::'***' ❌).
 * - Using `{ limit: 10, suffix: '***' }` allows named arguments.
 * - Future-friendly: more options can be added without breaking code.
 *
 * OPTIONS:
 *  limit  (number) - max characters allowed (default = 15)
 *  suffix (string) - text to add after truncation (default = "...")
 *
 * USAGE EXAMPLES:
 *
 * // Use defaults
 * {{ text | truncate }}
 *
 * // Only custom suffix
 * {{ text | truncate:{ suffix: '***' } }}
 *
 * // Only custom limit
 * {{ text | truncate:{ limit: 20 } }}
 *
 * // Custom limit + custom suffix
 * {{ text | truncate:{ limit: 10, suffix: '...' } }}
 *
 * HOW IT WORKS INTERNALLY:
 * - The pipe receives `value` and an `options` object.
 * - Defaults are applied using the nullish coalescing operator (??).
 * - If value length > limit → slice text and append suffix.
 * - Otherwise → return original value.
 *
 * This pattern is used by many Angular libraries because it's
 * cleaner, more readable, and easily extensible.
 */

}
