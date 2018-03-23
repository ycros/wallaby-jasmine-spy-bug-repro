describe('sample', () => {
  it('should work', () => {
    const testFnSpy = jasmine.createSpy('testFn');

    testFnSpy.and.callFake((foo, cb) => {
      // this works in standalone jasmine:
      cb(null, 'yes');

      // this works in wallaby.js):
      // cb[1](null, 'yes');
    });

    let callBackCalled = false;
    testFnSpy('foo', () => {
      callBackCalled = true;
    });

    expect(callBackCalled).toBeTruthy();
  });
});
