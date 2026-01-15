import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ZeroCostAbstractions = () => {
  const markdownFilePath = 'Languages/Rust/Advanced/Performance/ZeroCostAbstractions';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Zero-Cost Abstractions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ZeroCostAbstractions;
