import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
