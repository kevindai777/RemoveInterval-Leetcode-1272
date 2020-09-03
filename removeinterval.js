//Objective is to remove all boundaries of an interval from a list of intervals.

let intervals = [[0,2],[3,4],[5,7]], toBeRemoved = [1,6]


//O(nlogn) solution where n is the number of intervals
//We sort the intervals then 

intervals.sort((a,b) => a[0] - b[0])
    
let result = []
for (let interval of intervals) {
    
    //Before or after the removal interval
    if (interval[1] < toBeRemoved[0] || interval[0] > toBeRemoved[1]) {
        result.push(interval)

    //Intersection on left side
    } else if (interval[0] <= toBeRemoved[0] && interval[1] > toBeRemoved[0] && interval[1] < toBeRemoved[1]) {
        result.push([interval[0], toBeRemoved[0]])
    
    //Removed interval falls in between interval
    } else if (interval[0] <= toBeRemoved[0] && interval[1] > toBeRemoved[1]) {
        if (interval[0] == toBeRemoved[0]) {
            result.push([toBeRemoved[1], interval[1]])
        } else {
            result.push([interval[0], toBeRemoved[0]], [toBeRemoved[1], interval[1]])                
        }
        
    //Intersection on right side
    } else if (interval[0] > toBeRemoved[0] && interval[0] < toBeRemoved[1] && interval[1] > toBeRemoved[1]) {
        result.push([toBeRemoved[1], interval[1]])
    
        
    //Interval falls in between removed interval
    } else if (interval[0] >= toBeRemoved[0] && interval[1] <= toBeRemoved[1]) {
        continue
    }
}

return result