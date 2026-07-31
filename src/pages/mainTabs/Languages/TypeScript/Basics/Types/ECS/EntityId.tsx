import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const EntityId = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/ECS/EntityId';

  return (
    <>
      <PageLayout>
        <PageTitle title="EntityId (Branded)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EntityId;
