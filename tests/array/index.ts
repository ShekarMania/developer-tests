// Example Item in the array.
// {
//     "movie_id": 1,
//     "title": "Iron Man",
//     "phase": "Phase One",
//     "release_year": 2015,
//     "running_time": 126,
//     "rating_name": "PG-13",
//     "disc_format_name": "Blu-ray",
//     "viewing_format_name": "Widescreen",
//     "release_date": "May 2, 2008",
//     "budget": "140,000,000"
// }
export function sortByBudget(sample) {
    // Also sort by movie_id
    sample.sort((a,b) => {
        if(a.budget.localeCompare(b.budget) == 0) {
            return a.movie_id - b.movie_id;
        }
       return a.budget.localeCompare(b.budget);
    });
  
    return sample;
}

export function sortByTitle(sample) {
    sample.sort((a,b) => a.title.localeCompare(b.title));
    return sample;
}

export function filterByBluray(sample) {
    // Also sort by movie_id
    sample = sample.filter((obj) => obj.disc_format_name.indexOf("Blu-ray") != -1);
    sample.sort((a,b) => a.movie_id - b.movie_id);
  
    return sample;
}

export function transformArray(sample) {
    sample = sample.map(item => ({
        "title": item.title,
        "phase": 1,
        "release": item.release_date
    }));

    sample.sort((a,b) => a.title.localeCompare(b.title));
  
    return sample;
}

export function sumBudget(sample) {
    // let sum = 0;
    // sample.map(item => {
    //     sum += Number(item.budget.replace(/[^0-9-.]/g, ''));
    // })
    return sample.reduce((acc, item) => acc + Number(item.budget.replace(/[^0-9-.]/g, '')), 0);
}
