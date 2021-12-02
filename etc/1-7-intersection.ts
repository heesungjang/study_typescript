{
    /**
     *  Intersection type: &
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(
            person.name,
            person.employeeId,
            person.score,
            person.work()
        );
    }

    const internNumberOne: Student & Worker = {
        name: "zion",
        score: 1,
        employeeId: 2,
        work: () => {},
    };

    internWork(internNumberOne);
}
