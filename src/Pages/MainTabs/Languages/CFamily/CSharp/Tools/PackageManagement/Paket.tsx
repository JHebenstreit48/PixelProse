import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Paket = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/Paket';

  return (
    <PageLayout>
      <Header />
      <PageTitle title="C# Tools - Paket" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Paket;