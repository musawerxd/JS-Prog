// ================= Which Loop / Method to Use & When =================

// There is NO “best loop”.
// There is only “best for the situation.”

// The real skill = knowing WHICH one fits the job.



// ================================================================
// 1. for (Classic Loop)
// ================================================================

/*
Use when:
- You need full control over index
- You need to break early
- You need complex conditions
- Performance is critical
- You need forward/backward looping

Most used in:
- Algorithms
- Competitive programming
- Low-level logic

Pros:
- Flexible
- Fast
- Can break / continue

Cons:
- Verbose
- Manual index management
*/



// ================================================================
// 2. while
// ================================================================

/*
Use when:
- You don’t know how many times loop should run
- Loop depends on a condition
- Running until something changes

Example:
- Game loop
- Waiting for condition
- Polling

Pros:
- Clean for condition-based loops

Cons:
- Easy to create infinite loop
*/



// ================================================================
// 3. do...while
// ================================================================

/*
Use when:
- You need code to run AT LEAST once

Example:
- Asking user for input until valid
- Menu systems

Rarely used compared to others.
*/



// ================================================================
// 4. for...of
// ================================================================

/*
Use when:
- Looping through array values
- Looping through strings
- Looping through Set / Map
- You need break / continue

Most used modern loop for arrays.

Pros:
- Clean
- Supports break/continue
- No index headache

Cons:
- No direct index (use entries())
*/



// ================================================================
// 5. for...in
// ================================================================

/*
Use when:
- Looping over OBJECT keys

Example:
- Config objects
- Dynamic properties

Not recommended for arrays.

Pros:
- Best for objects

Cons:
- Gives keys, not values
*/



// ================================================================
// 6. forEach()
// ================================================================

/*
Use when:
- Performing side effects
- Logging
- Updating DOM
- No need to break early

Very common in frontend.

Pros:
- Clean
- Easy to read

Cons:
- Cannot break
- Returns undefined
*/



// ================================================================
// 7. filter()
// ================================================================

/*
Use when:
- Selecting elements
- Removing unwanted items
- Search functionality

Very common in real apps.

Returns:
- New filtered array
*/



// ================================================================
// 8. map()
// ================================================================

/*
Use when:
- Transforming data
- Extracting properties
- Preparing UI data

EXTREMELY common (especially React).

Returns:
- New array (same length)
*/



// ================================================================
// 9. reduce()
// ================================================================

/*
Use when:
- Combining array into one value
- Sum totals
- Counting
- Grouping
- Building objects

Powerful but harder to read.

Returns:
- Single value
*/



// ================================================================
//  Which Is Used Most in Real Projects?
// ================================================================

/*
Frontend:
1. map()        → VERY VERY common
2. filter()
3. forEach()
4. reduce()
5. for...of

Backend:
1. map()
2. filter()
3. reduce()
4. for
5. for...of

Algorithms:
1. for
2. while
3. reduce (sometimes)

Objects:
- for...in
*/



// ================================================================
//  Quick Decision Guide
// ================================================================

/*
Need transformation? → map()

Need selection? → filter()

Need one final value? → reduce()

Need side effects only? → forEach()

Need break/continue on array? → for...of

Need object keys? → for...in

Need full control? → for

Need condition-based repetition? → while

Need run at least once? → do...while
*/



// ================================================================
//  Professional Rule
// ================================================================

/*
Prefer:
map / filter / reduce
over
manual loops

Because:
- Cleaner
- More readable
- Functional style
- Easier to maintain
*/