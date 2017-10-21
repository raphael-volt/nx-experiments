import { SampleLibModule } from './sample-lib.module';

describe('SampleLib', () => {
  it('should work', () => {
    expect(new SampleLibModule()).toBeDefined();
  });
});
