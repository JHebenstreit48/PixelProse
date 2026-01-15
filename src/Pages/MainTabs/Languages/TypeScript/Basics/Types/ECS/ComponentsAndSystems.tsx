import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComponentsAndSystems = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/ECS/ComponentsAndSystems';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Components & Systems" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComponentsAndSystems;
