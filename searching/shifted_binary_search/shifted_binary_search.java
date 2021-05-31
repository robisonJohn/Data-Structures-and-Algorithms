
/*
class Program {
    // O(log(n)) time | O(log(n)) space
    public static int shiftedBinarySearch(int[] array, int target) {
        return shiftedBinarySearch(array, target, 0, array.length - 1);
    }

    public static int shiftedBinarySearch(int[] array, int target, int left, int right) {
        if (left > right) {
            return -1;
        }
        int middle = (left + right) / 2;
        int potentialMatch = array[middle];
        int leftNum = array[left];
        int rightNum = array[right];
        if (target == potentialMatch) {
            return middle;
        } else if (leftNum <= potentialMatch) {
            if (target < potentialMatch && target >= leftNum) {
                return shiftedBinarySearch(array, target, left, middle - 1);
            }
            else {
                return shiftedBinarySearch(array, target, middle + 1, right);
            }
        } else {
            if (target > potentialMatch && target <= rightNum) {
                return shiftedBinarySearch(array, target, middle + 1, right);
            } else {
                return shiftedBinarySearch(array, target, left, middle - 1);
            }
        }
    }
}
*/


class Program {
    // O(log(n)) time | O(1) space
    public static int shiftedBinarySearch(int[] array, int target) {
        return shiftedBinarySearch(array, target, 0, array.length - 1);
    }

    public static int shiftedBinarySearch(int[] array, int target, int left, int right) {
        while (left <= right) {
            int middle = (left + right) / 2;
            int potentialMatch = array[middle];
            int leftNum = array[left];
            int rightNum = array[right];
            if (target == potentialMatch) {
                return middle;
            }
            else if (leftNum <= potentialMatch) {
                if (target < potentialMatch && target >= leftNum) {
                    right = middle - 1;
                }
                else {
                    left = middle + 1;
                }
            } else {
                if (target > potentialMatch && target <= rightNum) {
                    left = middle + 1;
                } else {
                    right = middle - 1;
                }
            }
        }
        return -1;
        
}

}


