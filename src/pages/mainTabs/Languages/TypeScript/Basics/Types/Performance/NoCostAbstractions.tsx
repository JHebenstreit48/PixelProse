import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NoCostAbstractions = () => {
  const markdownFilePath = 'Languages/TypeScript/Basics/Types/Performance/NoCostAbstractions';

  return (
    <>
      <PageLayout>
        <PageTitle title="No-Cost Abstractions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NoCostAbstractions;
