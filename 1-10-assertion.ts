{
    /**
     * Type assertion
     */

    function jsStrFunc(): any {
        return 2;
    }

    const result = jsStrFunc();

    console.log((result as string).length);

    const wrong: any = 2;
    console.log((wrong as number[]).push(2));
}
