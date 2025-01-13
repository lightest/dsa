function revertString(str = "")
{
    // It sucks js strings are immutable.
    let out = new Array(str.length);
    const len = str.length;
    const halfLen = Math.ceil(str.length * .5);

    for (let i = 0; i < halfLen; i++)
    {
        out[ i ] = str[ len - i - 1 ];
        out[ len - i - 1 ] = str[i];
    }

    return out.join("");
}

function reverStringNoob(str = "")
{
    return str.split("").reverse().join("");
}

function isPalindrome(str = "")
{
    const len = str.length;
    const halfLen = Math.floor(len * .5);

    for (let i = 0; i < halfLen; i++)
    {
        if (str[ i ] !== str[ len - i - 1 ])
        {
            return false;
        }
    }

    return true;
}

function nfib(n = 1)
{
    if (n <= 1)
    {
        return n;
    }

    return nfib(n - 1) + nfib(n - 2);
}

const fibLut = [0, 1];
function nfibLut(n = 1)
{
    if (n <= 1)
    {
        return n;
    }

    if (fibLut[ n ] !== undefined)
    {
        return fibLut[ n ];
    }

    if (fibLut[ n - 1 ] === undefined)
    {
        fibLut[ n - 1 ] = nfib(n - 1);
    }

    if (fibLut[ n - 2 ] === undefined)
    {
        fibLut[ n - 2 ] = nfib(n - 2);
    }

    fibLut[ n ] = fibLut[ n - 1 ] + fibLut[ n - 2 ];

    return fibLut[ n ];
}

// TODO: figure out
function nfibLutIterative(n = 1)
{
    if (n <= 1)
    {
        return n;
    }

    let out = 0;

    for (let i = n; n > 1; i--)
    {
        if (fibLut[i - 1] === undefined) {}
    }

    fibLut[ n ] = out;
}

function twoSum(nums = [], target = 0)
{
    const lut = {};
    for (let i = 0; i < nums.length; i++)
    {
        if (lut[ nums[ i ] ] !== undefined)
        {
            return [ lut[ nums[ i ] ], i ];
        }

        lut[ target - nums[ i ] ] = i;
    }
}

function mergeSortedArrays(arri, arrj)
{
    let i = 0, j = 0, k = 0;
    const out = new Array(arri.length + arrj.length);

    while (i < arri.length && j < arrj.length)
    {
        if (arri[ i ] < arrj[ j ])
        {
            out[ k ] = arri[ i ];
            i++;
        }
        else
        {
            out[ k ] = arrj[ j ];
            j++;
        }

        k++;
    }

    // Now handle what's left if anything.
    while (i < arri.length)
    {
        out[ k ] = arri[ i ];
        k++;
        i++;
    }

    while (j < arrj.length)
    {
        out[ k ] = arrj[ j ];
        k++;
        j++;
    }

    return out;
}

function longestSubstringLen(str = "")
{
    const lut = {};
    let lastSubstringStart = 0;
    let maxLen = 0;

    for (let i = 0; i < str.length; i++)
    {
        if (lut[ str[ i ] ] !== undefined)
        {
            // Next symbol as the substring start.
            // We know for a fact there are no unique substrings earlier now.
            lastSubstringStart = Math.max(lut[ str[ i ] ] + 1, lastSubstringStart);
        }
        lut[ str[ i ] ] = i;
        maxLen = Math.max(maxLen, i - lastSubstringStart + 1);
    }

    return maxLen;
}

class ListNode
{
    constructor(v)
    {
        this.value = v;
        this.next = null;
    }

    get val()
    {
        return this.value;
    }

    get v()
    {
        return this.value;
    }
}

function setupSinglyLinkedList(n)
{
    if (n === undefined || n <= 0)
    {
        n = Math.round(Math.random() * 9) + 1;
    }

    console.log("Setting up singly linked list for n:", n);

    const head = new ListNode(0);
    let prevNode = head;

    for (let i = 0; i < n; i++)
    {
        prevNode.next = new ListNode(i + 1);
        prevNode = prevNode.next;
    }

    console.log(head)

    return head;
}

function reverseSinglyLinkedList(head)
{
    let current = head;
    let prev = null;

    while (current.next)
    {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Reverse final.
    current.next = prev;

    return current;
}

function reverseSinglyLinkedListRecoursive(node, prev)
{
    const next = node.next;
    node.next = prev

    if (!next)
    {
        return node;
    }

    return reverseSinglyLinkedListRecoursive(next, node);
}

function singlyLinkedListHasCycle(head)
{

}

function printSinglyLinkedList(head)
{
    let current = head;
    while (current.next)
    {
        console.log(current.value);
        current = current.next;
    }
    console.log(current.value);
}

class TreeNode
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function setupBinaryTree(root, n = 0, child = 0)
{
    if (n <= 0)
    {
        return;
    }

    if (!root)
    {
        root = new TreeNode(0);
    }

    root.left = new TreeNode(child + 1);
    root.right = new TreeNode(child + 2);

    n--;
    child++;
    setupBinaryTree(root.left, n, child);
    setupBinaryTree(root.right, n, child);

    return root;
}

function setupRandomBST(root, n = 0)
{
    if (n <= 0)
    {
        return;
    }

    if (!root)
    {
        root = new TreeNode(Math.round(n * .5));
    }

    while (n >= 0)
    {
        insertIntoBST(root, n);
        n--;
    }

    return root;
}

function invertBinaryTree(root)
{
    if (!root)
    {
        return root;
    }

    const t = root.left;
    root.left = root.right;
    root.right = t;

    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    return root;
}

function inOrderBSTTraverse(root)
{
    const results = [];

    function traverse(node)
    {
        if (!node)
        {
            return;
        }

        traverse(node.left);
        results.push(node.value);
        traverse(node.right);
    }

    traverse(root);

    return results;
}

function levelOrderTraversal(root, level, res = [])
{
    if (!root)
    {
        return;
    }

    if (res[ level ] === undefined)
    {
        res[ level ] = [];
    }

    res[ level ].push(root.value);

    levelOrderTraversal(root.left, level + 1, res);
    levelOrderTraversal(root.right, level + 1, res);

    return res;
}

function insertIntoBST(root, value)
{
    if (!root)
    {
        return new TreeNode(value);
    }

    // Ensure it's unique.
    if (value === root.value)
    {
        return;
    }

    if (value < root.value)
    {
        root.left = insertIntoBST(root.left, value);
    }
    else
    {
        root.right = insertIntoBST(root.right, value);
    }

    return root;
}

function printBinaryTree(root)
{
    function traverseChildren(root)
    {
        if (!root)
        {
            return;
        }

        if (root.left)
        {
            console.log(root.left.value);
        }

        if (root.right)
        {
            console.log(root.right.value);
        }

        traverseChildren(root.left);
        traverseChildren(root.right);
    }

    console.log(root.value);
    traverseChildren(root);
}

function runAll()
{
    let t = 0;
    let tTotal = 0;
    console.log("String reversal:");
    let input = [ "adsf123", "uuaaii", "lohpidr", "123456789" ];
    let target = 0;

    for (let i = 0; i < input.length; i++)
    {
        console.log("in:", input[ i ], "out:", revertString(input[ i ]));
    }

    console.log("\nIs palindrome");
    input = [ "adsf123", "fooboof", "tenet", "sator", "lohpidr", "asdfbsa", "madam" ];

    for (let i = 0; i < input.length; i++)
    {
        console.log("in:", input[ i ], "out:", isPalindrome(input[ i ]));
    }

    console.log("\nFib n:");
    input = [ 0, 1, 2, 5, 7, 9, 10, 11, 12, 13, 15, 18, 20, 22, 24, 26, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40 ];

    tTotal = performance.now();
    for (let i = 0; i < input.length; i++)
    {
        t = performance.now();
        console.log("in:", input[ i ], "out:", nfib(input[ i ]));
        console.log("nfib for n", input[ i ], "took:", performance.now() - t, "ms.");
    }
    console.log("total time:", performance.now() - tTotal, "ms");

    console.log("\nFib n (with luts):");
    tTotal = performance.now();
    for (let i = 0; i < input.length; i++)
    {
        t = performance.now();
        console.log("in:", input[ i ], "out:", nfibLut(input[ i ]));
        console.log("nfibLut for n", input[ i ], "took:", performance.now() - t, "ms.");
    }
    console.log("total time:", performance.now() - t);

    console.log("\nTwo sum:")
    input = [ 2, 7, 11, 15, 13, 9, 1, 0, 5, 16, 42, 69, 420 ]
    target = 7;
    console.log("in:", input, target);
    console.log("out:", twoSum(input, target));

    console.log("\nMerge sorted arrays:");
    input = [ [ 0, 1, 2, 3, 7, 8, 9, 12, 13 ], [ 4, 5, 6, 10, 11, 14, 15 ] ];
    console.log("in:", input);
    console.log("out:", mergeSortedArrays(...input));

    console.log("\nLongest substring:");
    input = "abcdeabcabc";
    console.log("in:", input);
    console.log("out:", longestSubstringLen(input));
    input = "abcdecbcabc";
    console.log("in:", input);
    console.log("out:", longestSubstringLen(input));
    input = "abcdedacabc";
    console.log("in:", input);
    console.log("out:", longestSubstringLen(input));

    console.log("\nLinked lists:");
    let head = setupSinglyLinkedList();
    console.log("List before reversal:");
    printSinglyLinkedList(head)
    let reversed = reverseSinglyLinkedList(head);
    console.log("List after reversal:");
    printSinglyLinkedList(reversed);
    console.log("Reversing list recoursively:");
    reversed = reverseSinglyLinkedListRecoursive(reversed);
    printSinglyLinkedList(reversed);

    let root = setupBinaryTree(null, 2);
    console.log("Binary tree before reversal:");
    console.log(root);
    printBinaryTree(root);
    invertBinaryTree(root);
    console.log("Binary tree after reversal");
    console.log(root);
    printBinaryTree(root);
    root = setupRandomBST(null, 5);
    console.log("In-order traverse:");
    console.log(root);
    console.log(inOrderBSTTraverse(root));
    console.log("Level-order traverse:");
    console.log(levelOrderTraversal(root, 0));

}

runAll();
