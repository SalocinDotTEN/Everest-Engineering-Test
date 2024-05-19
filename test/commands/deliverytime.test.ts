import {expect, test} from '@oclif/test'

describe('deliverytime', () => {
  test
  .stdout()
  .command(['deliverytime'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['deliverytime', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
