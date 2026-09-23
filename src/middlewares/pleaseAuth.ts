import type { Request, Response, NextFunction } from "express"

export const pleaseAuth = async (
  req: Request<{}, undefined, {}, {password:string}>,
  res: Response<{message:string}>,
  next: NextFunction): Promise<void> =>
{
  const { password } = req.query

  if (password === 'please') {
    next()
  } else {
    res.status(401).json({message: "Unauthorized user"})
  }
}
