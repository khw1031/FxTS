import { go1 } from "."

describe("go1", () => {
  test("test1", () => {
    expect(go1(2, (n: number) => n ** 2)).toBe(4)
  })
  test("test2", () => {
    go1(Promise.resolve(2), (n: number) => n ** 2).then((a) =>
      expect(a).toBe(4)
    )
  })
})
