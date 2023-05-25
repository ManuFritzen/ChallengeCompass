import { CreatePostDto } from './create-post.dto';
declare const UpdatePostDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePostDto>>;
export declare class UpdatePostDto extends UpdatePostDto_base {
    users: string;
    decription: string;
    url_image: string;
}
export {};
