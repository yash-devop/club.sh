export interface LinkProps {
    url: string,
    shortCode: string
}

export type CreateLinkProps = Pick<LinkProps , "url">