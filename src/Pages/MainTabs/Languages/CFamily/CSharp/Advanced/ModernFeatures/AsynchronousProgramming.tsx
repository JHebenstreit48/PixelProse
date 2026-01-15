import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AsynchronousProgramming = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/ModernFeatures/AsynchronousProgramming';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Asynchronous Programming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsynchronousProgramming;
