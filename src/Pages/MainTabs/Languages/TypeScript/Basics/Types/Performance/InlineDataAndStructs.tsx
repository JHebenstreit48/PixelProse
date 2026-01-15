import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const InlineDataAndStructs = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Performance/InlineDataAndStructs';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Inline Data & Structs" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default InlineDataAndStructs;
