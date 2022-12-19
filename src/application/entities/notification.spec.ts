import { Content } from './content'
import { Notification } from './notification'

describe('Notification ', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma notificação de amizade'),
      category: 'social',
      recipientId: '',
    })

    expect(notification).toBeTruthy()
  })

  it('should not be able to create a notification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow()
  })

  it('should not be able to create a notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow()
  })
})
