import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const APISurfacesAndModules = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/ProjectScale/APISurfacesAndModules';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="API Surfaces & Modules" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default APISurfacesAndModules;
