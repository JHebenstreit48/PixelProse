import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
