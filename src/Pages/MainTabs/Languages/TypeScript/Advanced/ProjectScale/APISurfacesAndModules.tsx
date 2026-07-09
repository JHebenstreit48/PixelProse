import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
