import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
