import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const APISurfacesAndModules = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/ProjectScale/APISurfacesAndModules';

  return (
    <>
      <PageLayout>
        <PageTitle title="API Surfaces & Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APISurfacesAndModules;
