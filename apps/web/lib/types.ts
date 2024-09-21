export interface CreateLinkProps {
    url: string,
    shortCode?: string,
    title?: string,
    description?: string,
    image?: string
}

// export type CreateLinkProps = Pick<LinkProps , "url">