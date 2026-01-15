import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NoCostAbstractions = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Performance/NoCostAbstractions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="No-Cost Abstractions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NoCostAbstractions;
