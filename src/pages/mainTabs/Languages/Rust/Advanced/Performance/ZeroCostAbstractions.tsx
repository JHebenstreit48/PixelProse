import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ZeroCostAbstractions = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Performance/ZeroCostAbstractions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Zero-Cost Abstractions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZeroCostAbstractions;
