import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const InlineDataAndStructs = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Performance/InlineDataAndStructs';

  return (
    <>
      <PageLayout>
        <PageTitle title="Inline Data & Structs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InlineDataAndStructs;
