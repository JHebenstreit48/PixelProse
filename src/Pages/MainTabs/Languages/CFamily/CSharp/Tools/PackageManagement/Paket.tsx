import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Paket = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/Paket';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - Paket" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Paket;