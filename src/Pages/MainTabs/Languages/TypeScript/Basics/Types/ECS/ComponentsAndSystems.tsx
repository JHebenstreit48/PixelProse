import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ComponentsAndSystems = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/ECS/ComponentsAndSystems';

  return (
    <>
      <PageLayout>
        <PageTitle title="Components & Systems" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ComponentsAndSystems;
