import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
