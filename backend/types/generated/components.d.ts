import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButton extends Schema.Component {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface ComponentsDetail extends Schema.Component {
  collectionName: 'components_components_details';
  info: {
    displayName: 'Detail';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface ComponentsSeo extends Schema.Component {
  collectionName: 'components_components_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImg: Attribute.Media;
  };
}

export interface SectionsAbout extends Schema.Component {
  collectionName: 'components_sections_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    img: Attribute.Media;
    description: Attribute.Component<'components.detail'>;
    skills: Attribute.Component<'components.detail', true>;
  };
}

export interface SectionsContact extends Schema.Component {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.String;
    address: Attribute.String;
    mail: Attribute.String;
    phone: Attribute.String;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_shared_components_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subTitle: Attribute.String;
    description: Attribute.Text;
    heroLink: Attribute.Component<'components.button'>;
    img: Attribute.Media;
  };
}

export interface SectionsLatestBlogs extends Schema.Component {
  collectionName: 'components_sections_latest_blogs';
  info: {
    displayName: 'ContentLists';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.Text;
    content: Attribute.String;
    sectionLink: Attribute.Component<'components.button'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button': ComponentsButton;
      'components.detail': ComponentsDetail;
      'components.seo': ComponentsSeo;
      'sections.about': SectionsAbout;
      'sections.contact': SectionsContact;
      'sections.hero': SectionsHero;
      'sections.latest-blogs': SectionsLatestBlogs;
    }
  }
}
