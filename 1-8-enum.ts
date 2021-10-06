{
    /**
     * Enum
     */

    //JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // TypeScript
    // enum에 값을 할당하지 않으면 index 처리로 값이 설정된다

    enum DAYS {
        Monday = "monday",
        Tuesday = "monday",
        Wednesday = "monday",
        Thursday = "monday",
        Friday = "monday",
        Saturday = "monday",
        Sunday = "monday",
    }
    console.log(DAYS.Monday);
    console.log(DAYS.Saturday);
}
