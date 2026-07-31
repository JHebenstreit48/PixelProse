import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
