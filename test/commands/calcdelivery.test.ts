import {expect, test} from '@oclif/test'

describe('calcdelivery', () => {
  test
  .stdout()
  .command(['calcdelivery'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['calcdelivery', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
