function Sort()
{
    const arr=['Z', 'A', 'Q' ,'B','C', 'Y', 'S','W' ];
    const sort=arr.sort();
    return(
    // sort.join(',')
    <h4>{sort.join(',')}</h4>
    );
}


export default Sort;