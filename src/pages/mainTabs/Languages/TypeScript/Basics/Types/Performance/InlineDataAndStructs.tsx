import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
