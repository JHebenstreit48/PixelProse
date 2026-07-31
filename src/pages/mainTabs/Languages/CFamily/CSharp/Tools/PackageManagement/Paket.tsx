import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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