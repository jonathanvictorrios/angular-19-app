import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <p>
      Angular is a web framework that empowers developers to build fast,
      reliable applications. Maintained by a dedicated team at Google, Angular
      provides a broad suite of tools, APIs, and libraries to simplify and
      streamline your development workflow. Angular gives you a solid platform
      on which to build fast, reliable applications that scale with both the
      size of your team and the size of your codebase.
    </p>
    <img
      src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm1jq1pmo3inn73mw30bj.png"
    />
  `,
  styles: `
  img {
    width: 100%;
    height:auto;
  }
  `,
})
export class CommentsComponent {}
